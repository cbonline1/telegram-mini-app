import React from 'react';
import TelegramHeader from "../../components/Header/TelegramHeader";
import TelegramText from "../../components/Text/TelegramText";
import TelegramButton from "../../components/Button/TelegramButton";
import {useTelegram} from "../../hooks/useTelegram";
import './ButtonsScreen.css';

const ButtonsScreen = () => {
    const {webApp} = useTelegram()

    const onToggleMainButton = () => {
        if (!webApp.MainButton.isVisible) {
            webApp.MainButton.show()
        } else {
            webApp.MainButton.hide()
        }
    }

    const onToggleBackButton = () => {
        if (!webApp.BackButton.isVisible) {
            webApp.BackButton.show()
        } else {
            webApp.BackButton.hide()
        }
    }

    const onClose = () => {
        webApp.exit()
    }

    return (
        <div className={'buttonsScreen'}>
            <TelegramHeader>
                <TelegramText className={'telegramTitle'}>Buttons Screen</TelegramText>
            </TelegramHeader>


            <TelegramButton onClick={onToggleMainButton}>Toggle Menu Button</TelegramButton>
            <TelegramButton onClick={onToggleBackButton}>Toggle Back Button</TelegramButton>
            <TelegramButton onClick={onClose}>Exit</TelegramButton>
        </div>
    );
};

export default ButtonsScreen;
