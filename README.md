# Pickup Lines API

This is a very simple express app that returns a single pickup line randomly selected from the all-lines.json file. The shape of the object is:

```js
interface line {
  line: string;
  category: string[];
}
```

## Use Case

I have an Apple Shortcut set up to text my wife one of these pickup lines every day at 3:35 PM. Here's how it's configured:

- Get the contents of the api. I have it hosted on Glitch.com
- Get `Value` for `line` in `Contents of URL`
- Send `Dictionary Value` to [my wife's contact in my phone]

### Credit

The pickup lines were pulled from [https://pickup-lines.net/wp-json/wp/v2/posts/](https://pickup-lines.net/wp-json/wp/v2/posts/?per_page=100).

There is a script in the script folder to convert this RSS format to the shape above. I have removed the Dirty Lines and the Mean Lines. Feel free to customize for your need.
