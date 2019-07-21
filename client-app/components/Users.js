import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUsersList} from '../actions/users'
import Header from './Header'


const UsersList = ({users}) => {
    return users.map((user, i) => {
        return (<tr key={i}>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.country}</td>
        </tr>)
    })
}

class Users extends Component {
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        const {users} = this.props
        return (
            <div>
                <Header/>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Country</th>
                    </tr>
                    </thead>
                    <tbody>
                    <UsersList users={users}/>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.Users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => {
            dispatch(getUsersList())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)