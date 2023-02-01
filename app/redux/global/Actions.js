import * as requestFromServer from './Crud';
import { globalSlice, callTypes } from './Slice';
import store from '../store';
import { createNextState } from '@reduxjs/toolkit';

const { actions } = globalSlice;