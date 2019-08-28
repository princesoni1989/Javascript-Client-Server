import React, {Component} from 'react'
import {Table} from 'react-bootstrap'
import {connect} from 'react-redux'
import {getUsersList, loggedInuser} from '../actions/users'
import Header from './Header'


const UsersList = ({users}) => {
    return users.map((user, i) => {
        return (<tr key={i}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
        </tr>)
    })
}

class Users extends Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        const {users} = this.props
        return (
            <div>
                <Header/>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Surname</th>
                    </tr>
                    </thead>
                    <tbody>
                    <UsersList users={users}/>
                    </tbody>
                </Table>
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
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)