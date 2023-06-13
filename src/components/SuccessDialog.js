import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Dialog, PaperProvider, Portal } from "react-native-paper";

const SuccessDialog = ({ content, setVisible, visible }) => {
  return (
    <PaperProvider>
      <View>
        <Portal>
          <Dialog visible={visible} onDismiss={setVisible(false)}>
            <Dialog.Icon icon="check" size={32} />
            <Dialog.Content>
              <Text variant="bodyMedium">{content}</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={setVisible(false)}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </PaperProvider>
  );
};

export default SuccessDialog;

const styles = StyleSheet.create({});
