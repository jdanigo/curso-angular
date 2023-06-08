import { createAction, props } from "@ngrx/store";

export const loginAction = createAction(
    '[Login Component] Login',
    props<{data: object}>()
    )