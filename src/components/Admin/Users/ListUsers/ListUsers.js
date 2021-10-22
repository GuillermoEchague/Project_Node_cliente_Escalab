import React, { useState, useEffect } from "react";
import {   Switch, List, Avatar, Button, Icon, Modal as ModalAntd, notification } from "antd";
import NoAvatar from "../../../../assets/img/png/no-avatar.png";
import Modal from "../../../Modal";
import EditUserForm from "../EditUserForm";

import "./ListUsers.scss";

export default function ListUsers(props) {
    const { usersActive, usersInactive } = props;
    const [viewUserActives, setViewUserActives] = useState(true);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    return (
        <div className="list-users">
            <div className="list-users__switch">
                <Switch 
                defaultChecked
                onChange={()=> setViewUserActives(!viewUserActives)}
                />
                <span>
                    {viewUserActives ? "Usuarios Activos" : "Usuarios Inactivos"}
                </span>
            </div>
            {viewUserActives ? ( <UsersActive 
                                    usersActive={usersActive}
                                    setIsVisibleModal={setIsVisibleModal}
                                    setModalTitle={setModalTitle}
                                    setModalContent={setModalContent}
                                    />  ):(<UsersInactive usersInactive={usersInactive}/>)}

            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisible={setIsVisibleModal}
            
            >
                {modalContent}
            </Modal>
        </div>
    )
}

function UsersActive(props) {
    const {usersActive,
           setIsVisibleModal,
           setModalTitle,
           setModalContent,
    
    } = props;

    const editUser = user => {
        setIsVisibleModal(true);
        setModalTitle(
          `Editar ${user.name ? user.name : "..."} ${
            user.lastname ? user.lastname : "..."
          }`
        );
         setModalContent(
           <EditUserForm
             user={user}
        //     setIsVisibleModal={setIsVisibleModal}
        //     setReloadUsers={setReloadUsers}
           />
         );
      };



    return (
        <List 
        className="users-active"
        itemLayout="horizontal"
        dataSource={usersActive}
        renderItem={user => (
            <List.Item
            actions={[
                <Button 
                    type="primary"
                    onClick={()=> editUser(user)}
                >
                    <Icon type="edit" />
                </Button>,
                <Button 
                type="danger"
                onClick={()=> console.log("Desactivar usuario")}
            >
                <Icon type="stop" />
            </Button>,
            <Button 
            type="danger"
            onClick={()=> console.log("Eliminar usuario")}
        >
            <Icon type="delete" />
        </Button>,
            ]}
            >
                <List.Item.Meta 
                avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
                title={`
                    ${user.name ? user.name : '...'}
                    ${user.lastname ? user.lastname : '...'}
                    `}
                description={user.email}
                />
            </List.Item>
        )}
        />
    );
}

function UsersInactive(props) {
    const {usersInactive} = props;
    return (
        <List 
        className="users-active"
        itemLayout="horizontal"
        dataSource={usersInactive}
        renderItem={user => (
            <List.Item
            actions={[
                <Button 
                    type="primary"
                    onClick={()=> console.log("Activar usuario")}
                >
                    <Icon type="check" />
                </Button>,
                
            <Button 
            type="danger"
            onClick={()=> console.log("Eliminar usuario")}
        >
            <Icon type="delete" />
        </Button>,
            ]}
            >
                <List.Item.Meta 
                avatar={<Avatar src={user.avatar ? user.avatar : NoAvatar} />}
                title={`
                    ${user.name ? user.name : '...'}
                    ${user.lastname ? user.lastname : '...'}
                    `}
                description={user.email}
                />
            </List.Item>
        )}
        />
    );
}