import {atom } from "recoil"

const access_token = atom({
    key:"accesstoken",
    default:"",
});

const uid  = atom({
    key:"uid",
    default:""
})
const pageid  = atom({
    key:"pageid",
    default:""
})

export {access_token,uid,pageid}