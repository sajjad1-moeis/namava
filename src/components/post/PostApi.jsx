import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {createClient} from "@supabase/supabase-js";
const supabase = createClient(
   "https://ucnazinqjkpdqbuqbers.supabase.co",
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjbmF6aW5xamtwZHFidXFiZXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5NzkyNjMsImV4cCI6MjAyMjU1NTI2M30.yxM8YYk2q-xcjpe1NIM0DbI8MSm7WjCGQcWkER88n-o"
);

import Api from "../../Api";
let arr = await Api("allVideo");
export default function TextFieldHiddenLabel() {
   async function clickHandeler() {
      let inputs = document.querySelectorAll(".input input");
      let newObj = {
         id: Math.floor(Math.random() * 111111),
         img: inputs[0].value,
         fullImg: inputs[1].value,
         title: inputs[2].value,
         isIndex: 0,
         isFilter: "first",
      };
      const {error} = await supabase.from("allVideo2").insert(newObj);
      inputs.forEach((input) => (input.value = ""));
      console.log(newObj);
   }
   return (
      <div className='my-40 text-white p-20'>
         <Stack
            component='form'
            sx={{
               width: "25ch",
            }}
            spacing={2}
            noValidate
            autoComplete='off'
         >
            <TextField className='input' hiddenLabel color='secondary' id='filled-hidden-label-small' variant='outlined' placeholder='img' />
            <TextField className='input' hiddenLabel color='secondary' id='filled-hidden-label-normal' variant='outlined' placeholder='fullImg' />
            <TextField className='input' hiddenLabel color='secondary' id='filled-hidden-label-small' variant='outlined' placeholder='title' />
         </Stack>
         <div className='my-5' onClick={clickHandeler}>
            <Button variant='contained' disableElevation>
               Disable elevation
            </Button>
         </div>
      </div>
   );
}
