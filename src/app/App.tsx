import './App.css'
import {ThemeProvider} from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import {useAppSelector} from "../common/hooks/useAppSelector.ts";
import {selectThemeMode} from "./app-selectors.ts";
import {getTheme} from "../common/theme/theme.ts";
import {Header} from "@/common/components/Header/Header.tsx";
import {Main} from './Main.tsx'
import {Task} from "@/features/todolists/model/tasks-reducer.ts";

export type TasksState = Record<string, Task[]>

export const App = () => {
    const themeMode = useAppSelector(selectThemeMode)
    const theme = getTheme(themeMode)

    return (
        <ThemeProvider theme={theme}>
            <div className={'app'}>
                <CssBaseline/>
                <Header/>
                <Main/>
            </div>
        </ThemeProvider>
    )
}
