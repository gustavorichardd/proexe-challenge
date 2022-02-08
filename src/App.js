import { useState, useEffect } from 'react'
import { NewUserModal } from './components/NewUserModal'

import { useSelector, useDispatch } from 'react-redux'
import { initialUser, selectUser } from './redux/userSlice'
import { EditUserModal } from './components/EditUserModal'




const API_URL = 'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data'

function App() {
  const [newUserModalVisible, setNewUserModalVisible] = useState(false)
  const [editUserModalVisible, setEditUserModalVisible] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector(state => state)

  useEffect(() => {
    fetch(API_URL).then((response) => response.json()).then(response => {
      dispatch(initialUser(response))
    })
  }, [])


  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        <header>
          <h3>User list</h3>
          <button onClick={() => setNewUserModalVisible(true)}>Add new</button>

        </header>
        <main>
          <table>
            <thead>
              <tr>
                <th>
                  <button type='button'>Id</button>
                </th>
                <th>
                  <button type='button'>Name</button>
                </th>
                <th>
                  <button type='button'>Username</button>
                </th>
                <th>
                  <button type='button'>City</button>
                </th>
                <th>
                  <button type='button'>Email</button>
                </th>
                <th>
                  <button type='button'>Actions</button>
                </th>

              </tr>
            </thead>
            <tbody>
              {user.user.payload ? (
                user.user.payload.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.address.city}</td>
                    <td>{user.email}</td>
                    <td>
                      <button onClick={() => setEditUserModalVisible(true)}>Edit</button>
                      <button onClick={() => { }}>Delete</button>
                    </td>
                  </tr>
                ))
              ) : (
                null
              )}
            </tbody>
          </table>
        </main>
      </div>
      {newUserModalVisible ? <NewUserModal onClose={() => { setNewUserModalVisible(false) }} /> : null}
      {editUserModalVisible ? <EditUserModal onClose={() => { setEditUserModalVisible(false) }} /> : null}
    </div>
  )
}

export default App
