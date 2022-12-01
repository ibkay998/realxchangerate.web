from typing import Optional, List, Any

from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.currency import Currency

# from app.schemas.currency import Currency as currency_schema
from app.schemas.currency import CurrencyCreate, CurrencyUpdate


class CRUDCurrency(CRUDBase[Currency, CurrencyCreate, CurrencyUpdate]):
    # Declare model specific CRUD operation methods.
    def get_currency_by_isocode(self, db: Session, isocode: str) -> Any:
        return db.query(Currency).filter(Currency.isocode == isocode).first()
    
    def get_currency_by_id(self, db: Session, id: int) -> Any:
        return db.query(Currency).filter(Currency.id == id).first()
    
    def get_all_currencies(self, db:Session):
        """Returns all currencies from the database"""
        return db.query(Currency).all()

    def delete_currency_by_isocode(self, db: Session, isocode: str) -> dict:
        """This function deletes the currency associated with the isocode passed in.

        INPUT: isocode: str
        OUTPUT: {'status': True, 'message': 'Deleted!'}
        """

        currency = self.get_currency_by_isocode(db, isocode=isocode)

        if currency == None:
            return None

        db.delete(currency)
        db.commit()

        return currency
    
    def get_currencies_and_rate(self, db: Session, isocode: str):
        """Returns all currencies minus the base currency"""
        currencies = db.query(Currency).filter(Currency.isocode != isocode).all()
        return currencies


currency = CRUDCurrency(Currency)
