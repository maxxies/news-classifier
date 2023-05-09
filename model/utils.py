

class AttributeDict(dict):
    """dot.notation access to dictionary attributes"""
    __getattr__ = dict.get
    __setattr__ = dict.__setitem__
    __delattr__ = dict.__delitem__


def filter_sentences(sentences):
    filtered_sentences = []
    for sentence in sentences:
        keyphrase = sentence['sk'].split('##')[1]

        if keyphrase == "" or keyphrase is None:
            continue
        if 'original_text' not in sentence:
            continue
        if 'dates' not in sentence:
            continue
        else:
            filtered_sentences.append(sentence)

    return filtered_sentences


def format_input_texts(sentences):
    input_texts = []
    for sentence in sentences:
        keyphrase = sentence['sk'].split('##')[1]
        if keyphrase is not None:
            template = "This text is about " + keyphrase  + " that happened " + sentence['dates'][0]['matched_text']
            input_texts.append(sentence['original_text'] + '<s></s>' + template)
        else:
            input_texts.append('')

    return input_texts
    

def format_output(input, model_output):
    output = []
    for input_text, out in zip(input, model_output):
        if out['label'] == "LABEL_2" :
            input_text.update({"label": 'True' })
            output.append(input_text)
        elif out['label'] == 'LABEL_1':
            input_text.update({"label": 'False' })
            output.append(input_text)
        elif out['label'] == 'LABEL_0':
            input_text.update({"label": 'False' })
            output.append(input_text)
    return output
