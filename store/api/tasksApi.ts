import { createApi } from '@reduxjs/toolkit/query/react';
import { HttpMethod } from '../../enum/global';
import { Project } from '../../models/projects/Project';
import { BASE_URL, endpoints } from '../../utils/endpoints';
import { baseQuery } from './baseQueryConfig';


export const taskAPI = createApi({
  reducerPath: 'taskAPI',
  baseQuery: baseQuery,
    tagTypes: ['Project', 'Task'],
  endpoints: (builder) => ({
    createProject: builder.mutation<{id:string}, {name:string;description:string}>({
      query: (data) => ({
        url: endpoints.CREATE_PROJECT,
        method: HttpMethod.Post,
        body: data
      }),
      invalidatesTags: ['Project'],

    }),
    getProjectList: builder.query<Project[],void>({
      query: () => ({
          url: endpoints.GET_PROJECTS,
          method: HttpMethod.Get
      }),
      providesTags: ['Project']
  }),
    updateProject: builder.mutation({
        query: ({id,data}) => ({
          url: `${endpoints.UPDATE_PROJECT}${id}`,
          method: HttpMethod.Put,
          body: data
        }),
        invalidatesTags: ['Project'],
      }), 
  
      getTaskList: builder.query({
        query: (id) => ({
            url: BASE_URL + 'projects/' + id + '/tasks',
            method: HttpMethod.Get
        }),
        providesTags: ['Task']
    }),
      createTask: builder.mutation({
        query: (data) => ({
          url: endpoints.CREATE_TASK,
          method: HttpMethod.Post,
          body: data
        }),
        invalidatesTags: ['Task'],
      }),
        updateTask: builder.mutation({
            query: ({data,id}) => ({
                url: endpoints.UPDATE_TASK+id,
                method: HttpMethod.Put,
                body: data
            }),
        invalidatesTags: ['Task'],
            }),

            updateTaskStatus: builder.mutation({
              query: ({ id, status }) => ({
                url: `${endpoints.UPDATE_TASK_STATUS}${id}/status`,
                method: HttpMethod.Put,
                body: { status },
              }),
              invalidatesTags: ['Task'],
          }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: endpoints.DELETE_TASK+id,
                method: HttpMethod.Delete,
            }),
            invalidatesTags:['Task']
            }),
    })
});

export const {
useCreateProjectMutation,
useLazyGetProjectListQuery,
useUpdateProjectMutation,
useCreateTaskMutation,
useUpdateTaskMutation,
useUpdateTaskStatusMutation,
useDeleteTaskMutation,
useLazyGetTaskListQuery
    
} = taskAPI;
