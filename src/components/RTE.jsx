import React from 'react'
import {Editor} from'@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({name, control, label, defaultValue =""}) {
    return (
        <div className='w-full'> 
        {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
    
        <Controller
        name={name || "content"}
        control={control}
        render={({field: {onChange}}) => (
            <Editor
            apiKey='nkxrtbrw2p71i72st65nby8c1kzet7l04rsibxhqzl2r1vdq'
            initialValue={defaultValue}
            init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link", 
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",
                ],
                toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
            }}
            onEditorChange={onChange}
            />
        )}
        />
    
         </div>
      )
}

// <Editor 
// initialValue='default value'
// init={
//     {
//         branding:false,
//         height:500,
//         menubar: true,
//         plugins:['advlist', 'autolink', 'link', 'image', 'lists', 'charmap', 'preview', 'anchor', 'pagebreak',
//         'searchreplace', 'wordcount', 'visualblocks', 'visualchars', 'code', 'fullscreen', 'insertdatetime',
//         'media', 'table', 'emoticons', 'template', 'help'],
//         toolbar: 'undo redo | styles | bold italic | alignleft aligncenter alignright alignjustify | ' +
//         'bullist numlist outdent indent | link image | print preview media fullscreen | ' +
//         'forecolor backcolor emoticons | help',
//     }
// }
// />