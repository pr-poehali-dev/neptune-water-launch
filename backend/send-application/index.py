import json
import os
import urllib.request
import urllib.error


def handler(event: dict, context) -> dict:
    """Принимает заявку с сайта и отправляет её в Telegram Артёму."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': '',
        }

    body = json.loads(event.get('body', '{}'))

    name = body.get('name', '—')
    phone = body.get('phone', '—')
    city = body.get('city', '—')
    debt = body.get('debt', '—')
    property_status = body.get('property', '—')

    debt_labels = {
        'less_500k': 'Менее 500 000 ₽',
        'up_1m': 'До 1 000 000 ₽',
        'more_1m': 'Более 1 000 000 ₽',
    }
    property_labels = {
        'yes': 'Да, есть',
        'no': 'Нет имущества',
        'not_sure': 'Не уверен(а)',
    }

    text = (
        '🔔 *Новая заявка с сайта*\n\n'
        f'👤 *ФИО:* {name}\n'
        f'📱 *Телефон:* {phone}\n'
        f'🏙 *Город:* {city}\n'
        f'💰 *Сумма долга:* {debt_labels.get(debt, debt)}\n'
        f'🏠 *Имущество:* {property_labels.get(property_status, property_status)}'
    )

    bot_token = os.environ['TELEGRAM_BOT_TOKEN']
    chat_id = os.environ['TELEGRAM_CHAT_ID']

    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    payload = json.dumps({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'Markdown',
    }).encode('utf-8')

    req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'}, method='POST')
    try:
        urllib.request.urlopen(req)
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8')
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'ok': False, 'error': error_body}),
        }

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'ok': True}),
    }