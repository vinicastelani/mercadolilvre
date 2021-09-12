import { configureStore } from '@reduxjs/toolkit'
import breadcrumbsReducer from "../components/Breadcrumbs/features/updateBreadcrumbs"

export default configureStore({
  reducer: {
      breadcrumbs:breadcrumbsReducer
  },
})