import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {githubActions} from "../store/github/github.slice";

const actions = {
    ...githubActions
}
export const useAppActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}