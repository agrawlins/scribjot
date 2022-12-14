import React, {useContext, useState} from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

const UserProvider = (props) => {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {}, 
        token: localStorage.getItem("token") || "", 
        entries: [],
        prompts: [],
        errMsg: ""
    }

    const {toggleEdit, setToggleEdit} = props
    const [userState, setUserState] = useState(initState)
    const [prompt, setPrompt] = useState(initState)

    const signup = (credentials) => {
        axios.post("/auth/signup", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    const login = (credentials) => {
        axios.post("/auth/login", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserEntries()
            setUserState(prevUserState => ({
                ...prevUserState,
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: "",
            entries: []
        })
    }

    const handleAuthErr = (errMsg) => {
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

    const resetAuthErr = () => {
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

    const getUserEntries= () => {
        userAxios.get('/api/entries/user')
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    entries: res.data
                }))
                localStorage.setItem("entries", JSON.stringify(res.data))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const addEntry = (newEntry) => {
        userAxios.post("/api/entries", newEntry)
            .then(res => {
                setUserState(prevState => ({
                    ...prevState,
                    entries: [...prevState.entries, res.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const getPrompts = () => {
        userAxios.get("/api/prompts")
          .then(res => {
            setUserState(prevState => ({
                ...prevState,
                prompts: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
      }

    const editEntry = (updates, entryId) => {
    userAxios.put(`/api/entries/${entryId}`, updates,
        {
            headers: {
                'Authorization': `Bearer ${initState.token}`
            }
        }
    )
        .then(res => {
            getUserEntries()
            setUserState(entry => entry._id !== entryId ? entry : res.data)
        })
        .catch(err => console.log(err))
    }

    const deleteEntry = (entryId) => {
    userAxios.delete(`/api/entries/${entryId}`, 
        {
            headers: {
                'Authorization': `Bearer ${initState.token}`
            }
        }
    )
        .then(res => {
        const updatedEntries = userState.entries.filter(entry => entry._id !== entryId);
        setUserState(prevState => ({
            ...prevState,
            entries: updatedEntries
        }))
        localStorage.setItem("entries", JSON.stringify(updatedEntries))
        })
        .catch(err => console.log(err))
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addEntry,
                getUserEntries,
                getPrompts,
                editEntry,
                deleteEntry,
                resetAuthErr  
            }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider