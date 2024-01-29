import { renderer,screen } from '@testing-library/react'
import React from 'react';
import App from './App';

test ('renders text MickeyMouse', () => {

   const tree = renderer.create(<App/>).toJSON()
   expect(tree).toMatchSnapshot();
})