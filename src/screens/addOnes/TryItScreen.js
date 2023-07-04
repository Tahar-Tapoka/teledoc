import React, { useState } from "react";
import { View, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Spacer, ThemeView } from "../../infrastructure/theme";

const TryItScreen = () => {
  const [birthday, setBirthday] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date !== undefined) {
      setBirthday(date);
    }
  };

  const handleToggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  const handleSubmit = () => {
    // Do something with the birthday value, such as sending it to an API or storing it in state
    console.log("Birthday:", birthday);
  };

  return (
    <ThemeView>
      <Spacer size={6} />
      <Button title="Select Birthday" onPress={handleToggleDatePicker} />
      {showDatePicker && (
        <DateTimePicker
          value={birthday}
          mode="date"
          display="spinner" //{Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleDateChange}
        />
      )}
      <Button title="Submit" onPress={handleSubmit} />
    </ThemeView>
  );
};

export default TryItScreen;
