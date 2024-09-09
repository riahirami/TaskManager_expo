import { env } from "../config/env";

export const BASE_URL = env.BASE_URL_API;

export const endpoints = {
  LOGIN: BASE_URL + 'login',
  REGISTER: BASE_URL + 'register',
  CREATE_PROJECT: BASE_URL + 'projects',
  UPDATE_PROJECT: BASE_URL + 'projects/',
  DELETE_PROJECT: BASE_URL + 'projects',
  GET_PROJECTS: BASE_URL + 'projects',
  GET_TASKS: BASE_URL + 'projects/:id/tasks',
  UPDATE_TASK_STATUS: BASE_URL + 'tasks/',
  CREATE_TASK: BASE_URL + 'tasks',
  UPDATE_TASK: BASE_URL + 'tasks/',
  DELETE_TASK: BASE_URL + 'tasks/',
};
