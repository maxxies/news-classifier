from fastapi import FastAPI, Request
import uvicorn
import re
from model.zero_shot_classification import ZeroShotClassifier
from tracemalloc import start

app = FastAPI()


@app.get('/predict')
async def predict(request:Request):
  
    try:
        start()

        response =  await request.json()
        data =  response['data']
        
        if data == None or data == "":
            return {
                'status':False,
                'result':'Data is empty'
            }
        
        result = await ZeroShotClassifier().Predict(text=data)

        return {
            'status':True,
            'result':result
        }
    
    except Exception as err:
        return {
            'status':False,
            'result':
            "Something went wrong, {}".format(err)
        }


if __name__ == '__main__':
    uvicorn.run(app)
