import React, { useState } from 'react'



export default function BuyerInfoForm({usrName, usrLast, usrMail, setUsrName, setUsrLast, setUsrMail}) {


    return (
            <form>
                <label>Name:
                    <input style={styles} type="text" value={usrName} onChange={(e) => setUsrName(e.target.value)} />
                </label>
                <label>Last name:
                    <input style={styles} type="text" value={usrLast} onChange={(e) => setUsrLast(e.target.value)} />
                </label>
                <label>Email:
                    <input style={styles} type="text" value={usrMail} onChange={(e) => setUsrMail(e.target.value)} />
                </label>
            </form>
    )
}

const styles = {
    marginLeft:5,
    marginRight:50
}
