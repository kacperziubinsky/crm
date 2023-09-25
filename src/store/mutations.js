export default {
    add(state, payload){
        const today = new Date();
        const data = {
            id: today.getTime(),
            company: payload.clientCompany,
            name: payload.clientName,
            mail: payload.clientMail,
            phone: payload.clientPhone
        };
        state.clients.push(data);
    },
    delete(state, payload){
        state.clients.splice(payload.id, 1);
    },
    deleteProject(state, projectId) {
        const index = state.projects.findIndex(project => project.id === projectId);
        if (index !== -1) {
          state.projects.splice(index, 1);
        }
      }
}