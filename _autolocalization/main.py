import os
import json
from googletrans import Translator

def read_json(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        data = json.load(file)
    return data

def write_json(file_path, data):
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)

def translate_text(text, target_language):
    translator = Translator()
    translated = translator.translate(text, dest=target_language)
    return translated.text

def main():
    languages = read_json('languages.json')['languages']

    base_data = read_json('messages.json')

    if not os.path.exists('_locales'):
        os.makedirs('_locales')

    for language in languages:
        locale_dir = os.path.join('_locales', language)
        if not os.path.exists(locale_dir):
            os.makedirs(locale_dir)

        translated_data = {}

        for key, value in base_data.items():
            translated_value = translate_text(value['message'], language)
            translated_data[key] = {'message': translated_value}

        output_path = os.path.join(locale_dir, 'messages.json')
        write_json(output_path, translated_data)

        print('%s translation completed.' % language)

    print("\nTranslation completed.")

if __name__ == "__main__":
    main()
