import React from 'react';
import styled from 'styled-components';

export default function Page(props) {
 const PageView=styled.ScrollView`
 display:flex;
 margin:5px
 `
 return (<PageView>{props.children}</PageView>)
}