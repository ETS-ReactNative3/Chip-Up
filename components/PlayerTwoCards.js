import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native'
let listOfCards = []
class PlayerTwoCards extends Component {
  state = {
    cardOneHighLighted: false,
    cardTwoHighLighted: false,
    cardSelected: 'none',
    cardOneSelected: null,
    cardTwoSelected: null,
    cardOneValue: '',
    cardTwoValue: '',
  }
  importAll(r) {
    return r.keys().map(r);
  }
  componentDidMount() {
    listOfCards = this.importAll(require.context('../assets/images/cards', false, /\.(png|jpe?g|svg)$/));
  }
  cardOneSelected = () => {
    const { cardOneHighLighted, cardTwoHighLighted } = this.state
    if (cardOneHighLighted && !cardTwoHighLighted) {
      this.setState(() => ({
        cardOneHighLighted: false,
        cardTwoHighLighted: false,
        cardSelected: 'none',
      }))
    } else {
      this.setState(() => ({
        cardOneHighLighted: !cardOneHighLighted,
        cardTwoHighLighted: (cardOneHighLighted === cardTwoHighLighted) ? cardTwoHighLighted : !cardTwoHighLighted,
        cardSelected: 'one',
      }))
    }
  }
  cardTwoSelected = () => {
    const { cardOneHighLighted, cardTwoHighLighted } = this.state
    if (cardTwoHighLighted && !cardOneHighLighted) {
      this.setState(() => ({
        cardOneHighLighted: false,
        cardTwoHighLighted: false,
        cardSelected: 'none',
      }))
    } else {
      this.setState(() => ({
        cardTwoHighLighted: !cardTwoHighLighted,
        cardOneHighLighted: (cardTwoHighLighted === cardOneHighLighted) ? cardOneHighLighted : !cardOneHighLighted,
        cardSelected: 'two'
      }))
    }
  }
  selectCard = (image) => {
    let value = image.substring(14, 16)
    value = value[0] + value[1].toLowerCase()
    const { cardSelected } = this.state
    if (cardSelected === 'one') {
      this.setState(() => ({
        cardOneSelected: image,
        cardSelected: 'none',
        cardOneValue: value
      }))
    } else {
      this.setState(() => ({
        cardTwoSelected: image,
        cardSelected: 'none',
        cardTwoValue: value
      }))
    }
  }
  render() {
    const { cardOneHighLighted, cardTwoHighLighted, cardSelected, cardOneSelected, cardTwoSelected } = this.state
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.cardOneSelected}>
          {cardOneSelected === null
            ? <View style={cardOneHighLighted ? styles.cardHighlighted : styles.cardUnhighlighted}>
              <Text>Card 1</Text>
            </View>
            : <Image
              source={cardOneSelected}
              alt="info"
              style={{ height: 100, width: 71, borderRadius: 8, borderWidth: 2, borderColor: 'black', marginHorizontal: 5 }} />
          }
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={this.cardTwoSelected}>
          {cardTwoSelected === null
            ? <View style={cardTwoHighLighted ? styles.cardHighlighted : styles.cardUnhighlighted}>
              <Text>Card 2</Text>
            </View>
            : <Image
              source={cardTwoSelected}
              alt="info"
              style={{ height: 100, width: 71, borderRadius: 8, borderWidth: 2, borderColor: 'black' }} />
          }
        </TouchableWithoutFeedback>
        {cardSelected !== 'none'
          ? <View style={{ width: 1300, height: 400, flexDirection: 'row', flexWrap: 'wrap', }}>
            {listOfCards.map(
              (image, index) =>
                (<TouchableWithoutFeedback key={index} onPress={() => this.selectCard(image)}>
                  <Image
                    key={index}
                    source={image}
                    alt="info"
                    style={styles.selectedCard} />
                </TouchableWithoutFeedback>)
            )}
          </View>
          : <View></View>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  cardHighlighted: {
    height: 100,
    width: 71,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 8,
    marginHorizontal: 5,
    backgroundColor: "#DDDDDD",
  },
  cardUnhighlighted: {
    height: 100,
    width: 71,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  selectedCard: {
    height: 100,
    width: 71,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'black',
    marginHorizontal: 5
  }
})
export default PlayerTwoCards
