import uuid from 'uuid';

// ADD_ARTICLE
export const addArticle = (
  {
    description = '',
    note = '',
    unit = '',
    quantity = 0,
    done = false
  } = {}
) => ({
  type: 'ADD_ARTICLE',
  article: {
    id: uuid(),
    description,
    note,
    unit,
    quantity,
    done
  }
});

// REMOVE_ARTICLE
export const removeArticle = ({ id } = {}) => ({
  type: 'REMOVE_ARTICLE',
  id
});

// EDIT_ARTICLE
export const editArticle = (id, updates) => ({
  type: 'EDIT_ARTICLE',
  id,
  updates
});
