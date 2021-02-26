import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, Pressable } from 'react-native';
import Star from 'react-native-vector-icons/FontAwesome';

class RatingCompact extends Component {
    render() {
        return(
            <View style={styles.ratingCards}>
                <Star name='star' size={30} />
                <Text style={styles.ratingCardsText}> {this.props.rating}/5</Text>
            </View>
        )
    }
}

export class RatingDetailed extends Component {
    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {

        const { modalVisible } = this.state;

        return(
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {this.props.detailedRatings.map((item, index) => {
                                return(
                                    <View key={item.name} style={styles.restaurantRating}>
                                        <Text style={{fontSize: 30, fontWeight: 'bold'}}>{item.name}</Text>
                                        <RatingCompact rating={item.rating} />
                                    </View>
                                )
                            })}
                            <Pressable onPress={() => this.setModalVisible(!modalVisible)}>
                                <Text style={{alignSelf: 'center', marginTop: 10, borderWidth: 1, padding: 10, borderRadius: 15}}>Done</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                
                <Pressable onPress={() => this.setModalVisible(true)}>
                    <View style={styles.ratingCardsDetailed}>
                        {Array(this.props.rating).fill(<Star name='star' size={30}/>)}
                        {Array(5 - this.props.rating).fill(<Star name='star-o' size={30}/>)}
                    </View>
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    centeredView: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: "white",
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 15,
        padding: 10,
    },
    ratingCards: {
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#d4a265',
        borderRadius: 15
      },
      ratingCardsText: {
        fontSize: 30
      },
      ratingCardsDetailed: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      },
      restaurantRating: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    }
})

export default RatingCompact