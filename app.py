from fastapi import FastAPI, Request
import uvicorn
import re
from model.zero_shot_classification import ZeroShotClassifier

app = FastAPI()


@app.get('/predict')
def predict(request:Request):
    try:
        response = request.json()
        data = response['data']
        
        if data == None or data == "":
            return {
                'status':False,
                'result':'Data is empty'
            }
        
        result = ZeroShotClassifier.Predict(data)

        return {
            'status':True,
            'result':result
        }
    
    except Exception as err:
        return {
            'status':False,
            'result':
            err
        }


if __name__ == '__main__':
    uvicorn.run(app, debug=True)