from app.crud.base import CRUDBase
from app.models.contact import Contact

from app.schemas.contact import ContactCreate, ContactUpdate


class CRUDContact(CRUDBase[Contact, ContactCreate, ContactUpdate]):
    pass


contact = CRUDContact(Contact)
