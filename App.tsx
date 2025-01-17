import React, {useState} from 'react';
import {View, useWindowDimensions} from 'react-native';
import {Agenda, Event, MonthThemeType} from 'agenda-react-native';

const MONTH_THEME: MonthThemeType = {
  activeDayContentStyle: {
    backgroundColor: '#1890FF',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeDayTextStyle: {
    color: 'white',
  },
  dayContainerStyle: {
    marginVertical: 0,
    paddingVertical: 5,
    backgroundColor: 'transparent',
  },
  dayContentStyle: {
    width: 36,
    height: 36,
  },
  activeDayContainerStyle: {
    backgroundColor: 'transparent',
  },
};

const events: Event[] = [
  {
    name: 'Buy a gift',
    startDate: new Date(2022, 8, 12, 10, 30),
    endDate: new Date(2022, 8, 15, 10, 30),
    color: '#3722f6',
  },
  {
    name: 'Test Two',
    startDate: new Date(2022, 8, 14, 12, 40),
    endDate: new Date(2022, 8, 17, 12, 40),
    color: '#61d800',
  },
  {
    name: 'Test Three',
    startDate: new Date(2022, 8, 28, 11, 40),
    endDate: new Date(2022, 9, 10, 14, 40),
    color: '#dd0074',
  },
  {
    name: 'Study',
    startDate: new Date(2022, 7, 28, 14, 20),
    endDate: new Date(2022, 8, 3, 14, 20),
    color: '#fa8100',
  },
  {
    name: 'Study 2 ',
    startDate: new Date(2022, 7, 28, 14, 20),
    endDate: new Date(2022, 8, 3, 14, 20),
    color: '#A0E7E5',
  },
  {
    name: 'Study 3',
    startDate: new Date(2022, 7, 28, 14, 20),
    endDate: new Date(2022, 8, 3, 14, 20),
    color: '#B4F8C8',
  },
  {
    name: 'Study 4',
    startDate: new Date(2022, 7, 28, 14, 20),
    endDate: new Date(2022, 8, 3, 14, 20),
    color: '#FBE7C6',
  },
  {
    name: 'Study 5',
    startDate: new Date(2022, 7, 28, 14, 20),
    endDate: new Date(2022, 8, 3, 14, 20),
    color: '#FFAEBC',
  },
  {
    name: 'Check-in',
    startDate: new Date(2022, 8, 5, 14, 20),
    endDate: new Date(2022, 8, 5, 16, 20),
    color: '#b794f6',
  },
];

const App = () => {
  const [selectedDay, setSelectedDay] = useState(new Date(2022, 8, 1));
  const {height} = useWindowDimensions();

  console.log('selectedDay', selectedDay);

  return (
    <View style={{flex: 1}}>
      <Agenda
        events={events}
        selectedDay={selectedDay}
        onDayPress={setSelectedDay}
        monthTheme={MONTH_THEME}
      />
    </View>
  );
};

export default App;
