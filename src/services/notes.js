import api from './api'

const NoteService = {
    index: () => api.get("/notes", {
      headers: {'access-token': localStorage.getItem('token')}
    }),
    create: () => api.post("/notes", {'title': 'Nova Nota', 'body':'Nova Nota...'}, {
        headers: {'access-token': localStorage.getItem('token')}
      }),
      delete: (id) => api.delete(`/notes/${id}`, {
        headers: {'access-token': localStorage.getItem('token')}
      }),
      update: (id, params) => api.put(`/notes/${id}`, params, {
        headers: {'access-token': localStorage.getItem('token')}
      })
  }
  
  export default NoteService;