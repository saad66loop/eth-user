from web3 import Web3
from .constants import constanst

infura_url = f"https://mainnet.infura.io/v3/{constanst['infra_api']}"

token_abi = [
    {
        "constant": True,
        "inputs": [{"name": "owner", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "balance", "type": "uint256"}],
        "type": "function"
    },
    {
        "constant": True,
        "inputs": [],
        "name": "decimals",
        "outputs": [{"name": "", "type": "uint8"}],
        "type": "function"
    }
]

def get_ethBalance(address):
    wallet_address = address
    web3 = Web3(Web3.HTTPProvider(infura_url))
    balance = web3.eth.get_balance(wallet_address)
    balance = float(balance)
    balance = round(balance / 10**22, 4)
    return balance
    