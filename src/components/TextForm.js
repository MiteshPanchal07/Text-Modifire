import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to UpperCase!", "success");
    };
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Convert to LowerCase!", "success");

    };
    const handleCTClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text is clear!", "success");
    };

    const handleCopy = () => {
        // var text = document.getElementById("mybox");
        // text.select();
        navigator.clipboard.writeText(text);
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copy!", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Space Remove!", "success");
    }

    const handleCapitalize = () => {
        let newText = text
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
        setText(newText);
        props.showAlert("Capitalized each word!", "success");
    };

    const handleReverseText = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Text reversed!", "success");
    };

    const handleOnChange = (event) => {
        // console.log("on change..");
        setText(event.target.value);
    };


    const [text, setText] = useState("");
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? '#0d1b2a' : 'white',
                            color: props.mode === 'dark' ? 'white' : 'black'
                        }}
                        id="mybox"
                        rows="5"
                    ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCTClick}>
                    Clear Text
                </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
                    Copy text
                </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>
                    Extra Spaces
                </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCapitalize}>
                    Capitalize Words
                </button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleReverseText}>
                    Reverse Text
                </button>

            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary..</h1>
                <p>
                    {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters
                </p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing to Preview!.."}</p>
            </div>
        </>
    );
}
