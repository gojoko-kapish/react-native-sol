import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firestore from "@react-native-firebase/firestore"

const Extra = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        getDatabase()
    }, [])

    const getDatabase = async () => {
        try {
            const data = await firestore().collection("testing").doc("Bs1b1W7SHRFZq0Lw08sc").get()
            setData(data._data)
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <View>
            <Text style={{ fontSize: 22, color: "red" }}>{data ? data.name : "loading..."}</Text>
            <Text style={{ fontSize: 22, color: "red" }}>{data ? data.age : "loading"}</Text>
            {/* <Text style={{ fontSize: 22, color: "red" }}>{data ? data.hobby.map(list => `  ${list}`) : "loading"}</Text> */}
        </View>
    )
}

export default Extra;