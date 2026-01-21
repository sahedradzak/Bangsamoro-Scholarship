"""
Data migration to create initial superuser for production deployment.
This runs automatically when migrations are applied during deploy.
"""
from django.db import migrations
from django.contrib.auth.hashers import make_password


def create_superuser(apps, schema_editor):
    """Create the initial superuser if it doesn't exist."""
    User = apps.get_model('accounts', 'User')

    email = 'scholar@bangsamoro.site'

    # Check if superuser already exists
    if not User.objects.filter(email=email).exists():
        User.objects.create(
            username='BangsamoroScholar',
            email=email,
            password=make_password('#Scholar2026'),
            first_name='Bangsamoro',
            last_name='Scholar',
            role='super_admin',
            is_staff=True,
            is_superuser=True,
            is_active=True,
        )


def reverse_create_superuser(apps, schema_editor):
    """Reverse migration - remove the superuser."""
    User = apps.get_model('accounts', 'User')
    User.objects.filter(email='scholar@bangsamoro.site').delete()


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_superuser, reverse_create_superuser),
    ]
