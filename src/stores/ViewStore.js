import {observable, action } from "mobx";


 class ViewStore{
    @observable todoViwe = "alle";

}

const view =new ViewStore()
export default view