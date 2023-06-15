import adult from '@images/sight-icons/18+.svg';
import architecture from '@images/sight-icons/architecture.svg';
import avocation from '@images/sight-icons/avocation.svg';
import bank from '@images/sight-icons/bank.svg';
import cafe from '@images/sight-icons/cafe.svg';
import culture from '@images/sight-icons/culture.svg';
import history from '@images/sight-icons/history.svg';
import hostels from '@images/sight-icons/hostels.svg';
import industrial from '@images/sight-icons/industry.svg';
import natural from '@images/sight-icons/nature.svg';
import religion from '@images/sight-icons/religion.svg';
import sport from '@images/sight-icons/sport-basketball.svg';

interface IconField {
    [key: string]: {
        text: string
        src: string
    }
}

export const icons: IconField = {
    'nature': {text: 'Природа', src: natural},
    'culture': {text: 'Культура', src: culture},
    'historic': {text: 'История', src: history},
    'religion': {text: 'Религия', src: religion},
    'architecture': {text: 'Архитектура', src: architecture},
    'industrial': {text: 'Индустриальные объекты', src: industrial},
    'avocation': {text: 'Развлечения', src: avocation},
    'sport': {text: 'Спорт', src: sport},
    'adult': {text: '18+', src: adult},
    'cafe': {text: 'Кафе', src: cafe},
    'bank': {text: 'Банк', src: bank},
    'sleep': {text: 'Место для сна', src: hostels},
};

export const typeIcons = Object.keys(icons);