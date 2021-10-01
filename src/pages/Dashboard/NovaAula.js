
 import React, { useRef } from 'react';
 import { Editor } from '@tinymce/tinymce-react';
 import tinymce from 'tinymce/tinymce';
 import {Redirect} from 'react-router-dom';
  // Theme
  import 'tinymce/themes/silver';
  // Toolbar icons
  import 'tinymce/icons/default';
  // Editor styles
  import 'tinymce/skins/ui/oxide/skin.min.css';

   // importing the plugin js.
  import 'tinymce/plugins/advlist';
  import 'tinymce/plugins/autolink';
  import 'tinymce/plugins/link';
  import 'tinymce/plugins/image';
  import 'tinymce/plugins/lists';
  import 'tinymce/plugins/charmap';
  import 'tinymce/plugins/hr';
  import 'tinymce/plugins/anchor';
//   import 'tinymce/plugins/spellchecker';
  import 'tinymce/plugins/searchreplace';
  import 'tinymce/plugins/wordcount';
  import 'tinymce/plugins/code';
  import 'tinymce/plugins/fullscreen';
  import 'tinymce/plugins/insertdatetime';
  import 'tinymce/plugins/media';
//   import 'tinymce/plugins/nonbreaking';
  import 'tinymce/plugins/table';
//   import 'tinymce/plugins/template';
  import 'tinymce/plugins/help';

    // Content styles, including inline UI like fake cursors
  /* eslint import/no-webpack-loader-syntax: off */
//   import contentCss from 'tinymce/skins/content/default/content.min.css';
//   import contentUiCss from 'tinymce/skins/ui/oxide/content.min.css';


export default function NovaAula() {
    const editorRef = useRef(null);
    var user = {pro:true};

    const log = () => {
        if (editorRef.current) {
            let conteudo = editorRef.current.getContent();
            console.log(conteudo);
        }
    };


    return (
       <div className="container">
         {/* VERIFICAR SE É PROFESSOR */}
         {
           !user.pro?
            <Redirect to="/"/>
           :
           <></>
         }
         
        <section className="nova-aula">
                <Editor className="edit-TXT"
                    onInit={(evt, editor) => editorRef.current = editor}
                    initialValue=""
                    init={{
                    height: 500,
                    menubar: true,
                    plugins: [
                        'image',
                        'link',
                        'table',
                        'media',
                        'anchor',
                        'insertdatetime',
                        'fullscreen',
                        'help',
                        'lists',
                        'charmap',
                        'advlist',
                        'hr',

                    ],
                    toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    skin: false,
                    content_css: false,
                    // content_style: [contentCss, contentUiCss].join('\n'),
                    }}
                />
                <div className="nova-aula-buttons">
                    <button onClick={log}>Salvar!</button>
                </div>
        </section>

       </div>
            
       
    );
}
