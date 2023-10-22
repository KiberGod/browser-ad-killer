<h3>General information</h3>

---
This Python script acts as an autolocalizer for YouAd Killer.
<br>
<br>
<br>
<h3>Installation and first launch</h3>

---
First of all, you need to install googletrans:
``` 
pip install googletrans-py
```
Next, set the required locales in the `languages.json` file.

The next step is to add `message.json` to the current directory (where `main.py` is located), in any language and with the structure required for YouAd Killer. Based on this file, similar files will be created with translation into the specified languages.

The script should be run relative to the directory where `main.py` is located. Therefore, you may need to use a command to switch from the root directory of the entire project:
```
cd _autolocalization
```
After running the script, you can see the progress of the translation in the console. The message "`Translation completed.` indicates that the script worked correctly and completed its work.

The created locales will be located in the directory "`youtube-ad-killer/_autolocalization/_locales`". If this directory does not exist at the moment of script launch, it will be created automatically. This directory should be copied and replaced with the directory "`youtube-ad-killer/_locales`". The manual replacement is not automated in order to leave the previous data and be able to pre-check the updated locales.

After replacement, all YouAd Killer locales will be updated.
<br>
<br>
<br>
<h3>Version control</h3>

---
The following files and directories should be put into '.gitignore' as they have no actual value to the project:
```
youtube-ad-killer/_autolocalization/_locales
youtube-ad-killer/_autolocalization/message.json
```