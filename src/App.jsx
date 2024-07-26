import "./App.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-build-classic-mathtype";

function App() {
  return (
    <>
      <div className="App">
        <h2>Using CKEditor 5 build in React</h2>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
          config={{
            toolbar: {
              shouldNotGroupWhenFull: true,
              items: [
                // 'heading', '|',
                // 'fontfamily', 'fontsize', '|',
                // 'alignment', '|',
                // 'fontColor', 'fontBackgroundColor', '|',
                // 'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
                // 'link', '|',
                // 'outdent', 'indent', '|',
                // 'bulletedList', 'numberedList', 'todoList', '|',
                // 'code', 'codeBlock', '|',
                // 'insertTable', '|',
                // 'uploadImage', 'blockQuote', '|',
                "heading",
                "fontsize",
                "alignment",
                "fontColor",
                "fontBackgroundColor",
                "outdent",
                "indent",
                "|",
                "bold",
                "italic",
                "link",
                "bulletedList",
                "numberedList",
                "imageUpload",
                "mediaEmbed",
                "insertTable",
                "blockQuote",
                "undo",
                "redo",
                "|",
                "MathType",
                "ChemType",
              ],
            },
          }}
        />
      </div>
    </>
  );
}

export default App;
