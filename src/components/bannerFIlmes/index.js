import React,{Fragment} from "react";
import {Image, Text} from 'react-native';
import styles from "./styles";

export default function BannerFIlmes(){

    const imagem = Math.floor(Math.random() * 4 + 1);

    return(

        <>

            <Text style = {styles.textBanner}>Em cartaz </Text>

            <Image style = {styles.imagemBanner}  source = {require(`../../Img/${imagem}.jpg`)}   />

        </>

    )
}