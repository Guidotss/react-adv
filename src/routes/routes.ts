import { lazy,LazyExoticComponent } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";
//import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages"; 


type JSXComponent = () => JSX.Element;

interface Route {
    to: string; 
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

//const Lazy1 = lazy(() => import(/*webpackChunkName: "LazyPage1"*/ '../01-lazyload/pages/LazyPage1')); 
//const Lazy2 = lazy(() => import(/*webpackChunkName: "LazyPage2"*/ '../01-lazyload/pages/LazyPage2')); 
//const Lazy3 = lazy(() => import(/*webpackChunkName: "LazyPage3"*/ '../01-lazyload/pages/LazyPage3')); 

const lazyLayout = lazy(() => import(/*webpackChunkName: "LazyLayout"*/ '../01-lazyload/layout/LazyLayout')); 

export const routes:Route[] = [
    {
        path:'/lazyload/*',
        to:'/lazyload/',
        Component: lazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to:'/no-lazy',
        path:'nolazy',
        Component: NoLazy,
        name: 'No-Lazy'
    },

]