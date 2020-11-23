# Unity Rich Text Sanitizer
Remove Unity's Rich Text features from the text.

## What is this?
Built for remove Unity's Rich Text syntax(HTML like) in the game text.

### Input
```json
{
    "topBar": {
        "cash": "Cash: <Color=#1ed300>{0} $</Color>",
        "gold": "Gold: <Color=#ffc000>{0} G</Color>",
        "packages": "Packages",
        "items": "Items"
    },
    "equipment": {
        "tightChoke": "Tight Choke",
        "tightChokeDescription": "A gadget designed to reduce the spread of the shotgun. Accuracy increases by <color=#40A9FF>{0}%</color>."
    }
}
```

### Output
```json
{
    "topBar": {
        "cash": "Cash: {0} $",
        "gold": "Gold: {0} G",
        "packages": "Packages",
        "items": "Items"
    },
    "equipment": {
        "tightChoke": "Tight Choke",
        "tightChokeDescription": "A gadget designed to reduce the spread of the shotgun. Accuracy increases by {0}%."
    }
}
```

## Getting Started
1. Get Node.js

2. Install Deps
```
$ npm install
```

3. Prepare your text and Run
```
$ node sanitize -i source.json
```

## Available Parameters

```
-i: Specify input directory. Must be specified.
-k: Key Connector. Default is dot(.).
```

## License
MIT. Do whatever you want. You can feel free to make PR if you want to improve or fixed a bug.

# Buy me a coffee!
If you liked this program, would be glad you buy me a coffee ;D

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PVXTU5FJNBLDS)