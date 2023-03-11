import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Zocial from 'react-native-vector-icons/Zocial';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const getIcon = type => {
    switch (type) {
        case 'Feather':
            return Feather;
        case 'Ionicons':
            return Ionicons;
        case 'Zocial':
            return Fontisto;
        case 'Entypo':
            return Entypo;
        case 'Fontisto':
            return Fontisto;
        case 'EvilIcons':
            return EvilIcons;
        case 'FontAwesome':
            return FontAwesome;
        case 'AntDesign':
            return AntDesign;
        case 'Octicons':
            return Octicons;
        case 'FontAwesome5':
            return FontAwesome5;
        case 'Foundation':
            return Foundation;
        case 'MaterialIcons':
            return MaterialIcons;
        case 'SimpleLineIcons':
            return SimpleLineIcons;
        case 'MaterialCommunityIcons':
            return MaterialCommunityIcons;
    }
};

const Icon = ({ type, ...props }) => {
    const FontIcon = getIcon(type);
    return <FontIcon {...props} />;
};

export default Icon;