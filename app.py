from fastapi import FastAPI, Request
import uvicorn
import re
import nltk
from nltk.stem import WordNetLemmatizer
from nltk.corpus import stopwords
from transformers import pipeline


app = FastAPI()

nltk.download('stopwords')
nltk.download('punkt')
nltk.download('wordnet')
nltk.download('omw-1.4')

classifier = pipeline('zero-shot-classification')

# Predicts price with user data
def Predict(data):
    labels = ['governance', 'social', 'environmental']
    sentiments = classifier(data, labels)

    a = sentiments['scores'][sentiments['labels'].index('social')]
    b = sentiments['scores'][sentiments['labels'].index('environmental')]
    c = sentiments['scores'][sentiments['labels'].index('governance')]

    return a, b, c


# Clean and transform data
def CleanData(text):

    # regular expression keeping only letters
    only_letters = re.sub('[^a-zA-Z]', ' ', str(text))  # removes characters other than letters
    cleaned_letters = re.sub('^, ', ' ', str(only_letters))  # removes words with preceeding ','

    # convert to lower case and split into words
    words = cleaned_letters.lower().split(' ')

    lemmatizer = WordNetLemmatizer()

    # remove stopwords
    stop_words = set(stopwords.words('english'))
    cleaned_words = [w for w in words if not w in stop_words]

    # Remove meaningless expressions
    cleaned_words = [word for word in cleaned_words if (len(word) > 2)]

    # lemmatise words
    lemmatized_words = []
    for word in cleaned_words:
        word = lemmatizer.lemmatize(word)  # dont forget to change stem to lemmatize if you are using a lemmatizer
        lemmatized_words.append(word)

    # converting list back to string
    return " ".join(lemmatized_words)



@app.post('/predict')
def predict(request:Request):
    try:
        response = request.json()
        data = response['data']
        processed_data = CleanData(data)
        social,environmental,governance = Predict(processed_data)
        return {
            'status':True,
            'result':{
                'social':social,
                'environmental':environmental,
                'governance':governance
            }
        }
    except Exception as err:
        return {
            'status':False,
            'result':
            err
        }


if __name__ == '__main__':
    uvicorn.run(app, debug=True)