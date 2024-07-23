import { createAction } from "@reduxjs/toolkit";
import * as Actions from './types';

export const addItem = createAction(Actions.ADD_ITEM)
export const deleteItem = createAction(Actions.DELETE_ITEM)