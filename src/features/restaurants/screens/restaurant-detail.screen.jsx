import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { List } from 'react-native-paper'

import { SafeAreaContainer } from '../../../components/utility/safe-area.component'
import RestaurantInfoCard from '../components/restaurant-info-card.component'

const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params

  const [breakfastExpanded, setBreakfastExpanded] = useState(false),
    [lunchExpanded, setLunchExpanded] = useState(false),
    [dinnerExpanded, setDinnerExpanded] = useState(false),
    [drinksExpanded, setDrinksExpanded] = useState(false)

  return (
    <SafeAreaContainer>
      <RestaurantInfoCard restaurant={restaurant} />

      <ScrollView>
        <List.Accordion
          title='Café da manhã'
          left={(props) => <List.Icon {...props} icon='bread-slice' />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title='Ovos mexidos' />
          <List.Item title='Café preto' />
        </List.Accordion>

        <List.Accordion
          title='Almoço'
          left={(props) => <List.Icon {...props} icon='hamburger' />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title='Prato feito' />
          <List.Item title='Macarronada' />
        </List.Accordion>

        <List.Accordion
          title='Jantar'
          left={(props) => <List.Icon {...props} icon='food-variant' />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title='Espaguete' />
          <List.Item title='Sopa de legumes' />
          <List.Item title='Filé com fritas' />
        </List.Accordion>

        <List.Accordion
          title='Drinks'
          left={(props) => <List.Icon {...props} icon='cup' />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title='Café' />
          <List.Item title='Chá' />
          <List.Item title='Coca-Cola' />
          <List.Item title='Guaraná' />
        </List.Accordion>
      </ScrollView>
    </SafeAreaContainer>
  )
}

export default RestaurantDetailScreen
