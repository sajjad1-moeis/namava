import {createClient} from "@supabase/supabase-js";
import React from "react";
const supabase = createClient(
   "https://ucnazinqjkpdqbuqbers.supabase.co",
   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjbmF6aW5xamtwZHFidXFiZXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY5NzkyNjMsImV4cCI6MjAyMjU1NTI2M30.yxM8YYk2q-xcjpe1NIM0DbI8MSm7WjCGQcWkER88n-o"
);

const s = await supabase.from("allVideo").select();
let api = await supabase.from("allVideo2").select();
// ;
let resultApi = api.data.concat(s.data);
export default async function Api(text) {
   return resultApi.filter((item) => item.isFilter === text);
}

export async function returenrApi(text) {
   return (await supabase.from(`${text}`).select()).data;
}
