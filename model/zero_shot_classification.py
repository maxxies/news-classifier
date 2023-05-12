from model.config import config as cfg
from transformers import pipeline
from typing import Dict


# Zero shot classifier
class ZeroShotClassifier:

    def __init__(
        self,
        model_name: str =  cfg.model_name, 
        pipeline_name: str =  cfg.pipeline_name,
        ):
        self.model_name = model_name
        self.pipeline_name = pipeline_name
        self.labels = cfg.labels


    def get_pipeline(self):
        if self.pipeline_name == "zero-shot-classification":
            return pipeline(self.pipeline_name, model=self.model_name)

        else:
            raise ValueError("Invalid pipeline name")


    # predicts scores for each label
    def Predict(self,text: str)-> Dict[str, float]:
            model = self.get_pipeline()
            sentiments = model(text, cfg.labels, multi_label=True)
            print(sentiments)
            a = sentiments['scores'][sentiments['labels'].index('social')]
            b = sentiments['scores'][sentiments['labels'].index('environmental')]
            c = sentiments['scores'][sentiments['labels'].index('governance')]

            result = {
                'social':a,
                'environmental':b,
                'governance':c
            }

            return result
    