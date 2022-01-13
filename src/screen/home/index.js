import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet, Pressable } from 'react-native'

export default function index() {
    const [OutTouch, setOutTouch] = useState([])
    const [TempArray, setTempArray] = useState(["1", "+", "3", "+", "9"])
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{ flex: 2, backgroundColor: '#3b3b3b' }}>
            <View style={{ flex: 1, backgroundColor: '#3b3b3b', justifyContent: 'flex-end', margin: 10 }}>
                <View style={{ height: 60, width: "100%", backgroundColor: '#3b3b3b', justifyContent: 'center', alignItems: 'flex-end', borderBottomWidth: 0.8, }}>
                    <Text style={{ fontSize: 30, color: 'gray' }}>{OutTouch}</Text>
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor: '#3b3b3b', margin: 15 }}>
                <View style={{ flex: 4, backgroundColor: '', flexDirection: 'row' }}>
                    <View style={{ flex: 1, backgroundColor: '' }}>
                        <View style={{ flex: 5, backgroundColor: '', flexDirection: 'column', }}>
                            <TouchableOpacity
                                onPress={() => { }}
                                style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center', }}>
                                <Text style={{ fontSize: 30, color: 'gray' }}>C</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setOutTouch(currentArray => [...currentArray, "7"])
                                }}
                                style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 30, color: 'gray' }}>7</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setOutTouch(currentArray => [...currentArray, "4"])
                                }}
                                style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 30, color: 'gray' }}>4</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setOutTouch(currentArray => [...currentArray, "1"])
                                }}
                                style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 30, color: 'gray' }}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => {
                                    setOutTouch(currentArray => [...currentArray, "."])
                                }}
                                style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 30, color: 'gray' }}>.</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#3b3b3b' }}>
                        <View style={{ flex: 1, backgroundColor: '' }}>
                            <View style={{ flex: 5, backgroundColor: '', flexDirection: 'column' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setOutTouch(currentArray => [...currentArray, "+/-"])
                                    }}
                                    style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, color: 'gray' }}>+/-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setOutTouch(currentArray => [...currentArray, "8"])
                                    }}
                                    style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, color: 'gray' }}>8</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setOutTouch(currentArray => [...currentArray, "5"])
                                    }}
                                    style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, color: 'gray' }}>5</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setOutTouch(currentArray => [...currentArray, "2"])
                                    }}
                                    style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, color: 'gray' }}>2</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setOutTouch(currentArray => [...currentArray, "0"])
                                    }}
                                    style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, color: 'gray' }}>0</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#3b3b3b' }}>
                        <View style={{ flex: 1, backgroundColor: '' }}>
                            <View style={{ flex: 5, backgroundColor: '', flexDirection: 'column' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setOutTouch(currentArray => [...currentArray, "%"])
                                    }}
                                    style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, color: 'gray' }}>%</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setOutTouch(currentArray => [...currentArray, "9"])
                                    }}
                                    style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, color: 'gray' }}>9</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setOutTouch(currentArray => [...currentArray, "6"])
                                    }}
                                    style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, color: 'gray' }}>6</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setOutTouch(currentArray => [...currentArray, "3"])
                                    }}
                                    style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, color: 'gray' }}>3</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setOutTouch(currentArray => [...currentArray, "00"])
                                    }}
                                    style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, color: 'gray' }}>00</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: '#3b3b3b', }}>
                        <View style={{ flex: 1, backgroundColor: '#1a1919', borderRadius: 70 }}>
                            <View style={{ flex: 5, backgroundColor: '', flexDirection: 'column' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setOutTouch(currentArray => [...currentArray, "/"])
                                    }}
                                    style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, color: 'gray' }}>/</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setOutTouch(currentArray => [...currentArray, "*"])
                                    }}
                                    style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, color: 'gray' }}>*</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setOutTouch(currentArray => [...currentArray, "-"])
                                    }}
                                    style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, color: 'gray' }}>-</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {
                                        setOutTouch(currentArray => [...currentArray, "+"])
                                    }}
                                    style={{ flex: 1, backgroundColor: '', justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 30, color: 'gray' }}>+</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => {

                                        {
                                            Array.isArray(OutTouch) &&
                                                Array.isArray(TempArray) &&
                                                OutTouch.length === TempArray.length &&
                                                OutTouch.every((val, index) => val === TempArray[index]) &&
                                                setModalVisible(true)
                                        }
                                    }}
                                    style={{ flex: 1, backgroundColor: '#f6f3ed', justifyContent: 'center', alignItems: 'center', borderRadius: 100 }}>
                                    <Text style={{ fontSize: 30, color: 'gray' }}>=</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <Modal
                transparent
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>

        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        height: "40%",
        width: "70%",
        margin: 20,
        backgroundColor: "rgba(52, 52, 52, 0.8)",
        borderRadius: 20,
        alignItems: "center",
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: "50%",

    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "lightblue",
    },
    textStyle: {

        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        fontSize: 25,
        marginBottom: 15,
        justifyContent: 'center', alignItems: 'center'
    }
});